const getImages = (req, res) => {
    let data = {
        images: []
    }
    return res.json(data)
}

module.exports = {
    getImages
}