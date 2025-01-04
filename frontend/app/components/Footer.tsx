const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="text-center text-xs p-4 w-full">
            <p>Copyright &copy; {year} Christina Baudais</p>
            <p>All rights reserved.</p>
        </div>
    )
}

export default Footer;