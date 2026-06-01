import { store } from '../../app/store'
import { noteApiSlice } from '../notes/notesApiSlice'
import { userApiSlice } from '../users/userApiSlice'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const Prefetch = () => {
    useEffect(() => {
        store.dispatch(noteApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
        store.dispatch(userApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
    }, [])
    return <Outlet />
}
export default Prefetch