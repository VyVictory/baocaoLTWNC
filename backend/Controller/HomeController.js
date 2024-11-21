const getHomePage = (req, res) => {
<<<<<<< HEAD
    return res.render("main",
=======
    return res.render("index",
>>>>>>> parent of c4d97ad (chú í cập nhật .env , trong file readm)
        {
            title: 'Home website',
            page: 'home',
        }
    )
}
export default getHomePage