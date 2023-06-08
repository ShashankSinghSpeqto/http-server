const { User } = require("../models");

const createUser = async (userBody) => {
    try {
        const result = await User.insertOne({
            name: userBody.name,
            email: userBody.email,
        });
        if (result) {
            return result;
        }
    } catch (err) {
        console.log(err);
        throw new Error("Bad Request");
    }
};

const getAllUsers = async () => {
    try {
        const data = await User.find();
        if (data) {
            return data;
        }
    } catch (err) {
        console.log(err);
        throw new Error("Bad Request");
    }
};

const updateUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (user) {
            return user;
        }
    } catch (err) {
        console.log(err);
        throw new Error("Bad Request");
    }
};

const deleteUserById = async (id) => {
    try {
        const result = await User.deleteUserById(id);
        if (result) {
            return result;
        }
    } catch (err) {
        console.log(err);
        throw new Error("Bad Request");
    }
};

module.exports = {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
};
