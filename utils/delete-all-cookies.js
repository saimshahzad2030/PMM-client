import { cookies } from 'next/headers';
 
export function deleteAllCookies() {
    const allCookies = cookies().getAll();
    cookies().delete('token')
    cookies().delete('id')
    return allCookies;
    // allCookies.forEach(cookie => {
    //     cookies().set({
    //         name: cookie.name,
    //         value: '',
    //         expires: new Date(0), // Set to a past date
    //         path: '/', // Make sure to match the path
    //     });
    // });
}