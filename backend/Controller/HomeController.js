const getHomePage = (req, res) => {
    return res.render("home",
        {
            title: 'Home website',
            page: 'home',
        }
    )
}
export default getHomePage;