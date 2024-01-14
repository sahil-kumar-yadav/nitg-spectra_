import Link from "next/link";

function NavLink(props) {
    return (

        <Link href={props.path}
            className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{props.title}</Link>
    );
}

export default NavLink;