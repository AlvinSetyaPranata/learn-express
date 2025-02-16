import { USER_FAKE_DATA } from "../constants/user.js"

const USERS = [
    ...USER_FAKE_DATA
]
let id = 2;


export const getUsers = (req, res) => {
    res.json(USERS)
};


export const getUserById = (req, res) => {
    const { id } = req.query;

    const user = USERS.filter(user => user.id == parseInt(id, 10))

    if (user.length == 0) {
        return res.status(400).json({ messege: `User with given id ${id} is not found` })
    }

    return res.status(200).json(user[0])

}


export const addUser = (req, res) => {
    const { name, age, gender } = req.body;

    if (!name && !age && !gender) {
        return res.status(400).json({
            messege: "Name, Age, Gender cannot be empty"
        })
    }

    id++;
    USERS.push({
        id: id,
        name: name,
        age: age,
        gender: gender
    });

    return res.status(200).json({ messege: `${name} is successfully registered as user` })
}