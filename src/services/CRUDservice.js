import bcrypt from 'bcryptjs';
import db from "../models/index.js";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {   //C
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                // image: data.image,
                roleId: data.roleId,
                // positionId: data.positionId,
            });
            resolve('Account created!');
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {    //R (all users)
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,      //dataValues only, not previousDataValues
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById = (userId) => { //R (one user)
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                raw: true,
                where: { id: userId },
            });

            if (user) {
                resolve(user);
            }
            else {
                resolve({});
            }
        }
        catch (e) {
            reject(e);
        }
    });
}

let updateUserData = (data) => {    //U
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();

                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }
            else {
                resolve();
            }
        }
        catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
}