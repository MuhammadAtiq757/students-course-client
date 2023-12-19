import React from 'react';
import { useContext } from 'react';

import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Providers/AuthProvider';

const AdminHook = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],

        // enabled :!loading &&!!user?.email &&!!localStorage.getItem,
        
        enabled: !loading,
        queryFn: async () => {
  const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}




export default AdminHook;


   
