import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect } from "react";

function Index({ auth, projects }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                                        <tr className="text-nowrap">
                                            <th className="px-6 py-3">ID</th>

                                            <th className="px-6 py-3">Image</th>

                                            <th className="px-6 py-3">Name</th>

                                            <th className="px-6 py-3">
                                                Status
                                            </th>

                                            <th className="px-6 py-3">
                                                Create date
                                            </th>

                                            <th className="px-6 py-3">
                                                Due Date
                                            </th>

                                            <th className="px-6 py-3">
                                                Created By
                                            </th>

                                            <th className="px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-nowrap text-center">
                                        {projects.data.map((project) => (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-3 py-2">
                                                    {project.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={project.image_path}
                                                        alt=""
                                                        className="w-20 h-15"
                                                    />
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.status}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.due_date}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.createdBy.name}
                                                </td>
                                                <td>
                                                    <Link href={route('project.edit', project.id)} className="font-medium text-blue-900 hover:underline mx-1 hover:text-white px-3 py-2 rounded-lg bg-blue-500">
                                                        Edit
                                                    </Link>

                                                    <Link href={route('project.destroy', project.id)} className="font-medium text-white hover:underline mx-1 hover:text-white px-3 py-2 rounded-lg bg-red-600">
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination links={projects.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
