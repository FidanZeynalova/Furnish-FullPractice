import React from 'react'
import { Helmet } from "react-helmet";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDeleteDataMutation, useGetDataQuery, usePostDataMutation } from '../app/Slices/furnishSlice';
import { FiDelete } from "react-icons/fi";

let schema = yup.object().shape({
    desc: yup.string().required("Required"),
    name: yup.string().required("Required"),
    work: yup.string().required("Required"),
    img: yup.string().required("Required")
})

function Add() {
    let [postData] = usePostDataMutation()
    let [deleteData] = useDeleteDataMutation()
    let { refetch, data, isLoading } = useGetDataQuery()


    async function handleDelete(id) {
        await deleteData(id)
        refetch()
    }
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="https://is.gd/RlZxWY" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Add Pages</title>
            </Helmet>
            <div className="Add">
                <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>Add Form</h1>
                <Formik
                    initialValues={{ name: '', work: '', desc: '', img: '' }}
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        await postData(values)
                        refetch()
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="text" name="name" placeholder="Name" />
                            <ErrorMessage name="name" component="div" />

                            <Field type="text" name="work" placeholder="Work" />
                            <ErrorMessage name="work" component="div" />

                            <Field type="text" name="desc" placeholder="Descripton" />
                            <ErrorMessage name="desc" component="div" />

                            <Field type="text" name="img" placeholder="Image" />
                            <ErrorMessage name="img" component="div" />

                            <button type="submit" disabled={isSubmitting}>
                                Add
                            </button>
                        </Form>

                    )}
                </Formik>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Work</th>
                        <th>Delete</th>
                    </tr>
                    {
                        isLoading ? (
                            <h1> ...IsLoading</h1>
                        ) : (
                            data.map((item) => (
                                <tr key={item._id}>
                                    <td style={{ width: "100px", height: "100px" }}><img src={item.img} alt="" style={{ width: "100px", height: "100px", objectFit: "cover" }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.work}</td>
                                    <td><button onClick={() => handleDelete(item._id)}><FiDelete /></button></td>
                                </tr>
                            ))
                        )
                    }

                </table>
            </div>
        </>
    )
}

export default Add
