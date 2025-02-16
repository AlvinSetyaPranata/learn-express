export default function authMiddleware(req, res, next) {
    const api_key = req.header("X-API-KEY")

    if (!api_key) {
        return res.status(403).json({messege: "No API Key Provided"})
    }
}