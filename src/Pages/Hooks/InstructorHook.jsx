import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const InstructorHook = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        // enabled :!loading &&!!user?.email &&!!localStorage.getItem,

        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default InstructorHook;