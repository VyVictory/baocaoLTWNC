const getHomePage = (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.render("main",
=======
    return res.render("index",
>>>>>>> parent of c4d97ad (chú í cập nhật .env , trong file readm)
=======
    return res.render("home",
>>>>>>> parent of f7b9ad7 (thêm file main , sửa lại render home .)
        {
            title: 'Home website',
            page: 'home',
        }
    )
}
export default getHomePage