import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
const createUser = async (user,data) => {
    try {
        if(user.role!=='manager'){
            return {Message:`You are not authorized to create a from user ${user.role}`,status:false};
        }
        if (!data.name || !data.email || !data.password || !data.role) {
            return {Message:"Name, email, password and role are required.",status:false};
        }
        const users= await User.findOne({ where: { email: data.email } });
        if (users) {
            return {Message:"User already exists." , status:false};;
        }
        else{
        const hashPassword=await bcrypt.hash(data.password, 10);
        const user = await User.create({
            name: data.name ,
            email: data.email,
            password: hashPassword,
            role: data.role,
        });
        return {Message:user,status:true};
    } 
}catch (error) {
        return {Message:error.Message,status:false};
    }
};

const getUser = async (data) => {
    try {

        const user = await User.findOne({ where: { id: data.userId } });
        if (user) {
            return {Message:user,status:true};
        }
        else{
            return {Message:"User not found.",status:false};
        }
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};
const updateUser = async (users,data) => {
    try {
        if(users.role!=='manager'||users.role!=='supervisor'){
            return {Message:"You are not authorized to update a user",status:false};
        }
        const user = await User.findOne({ where: { email: data.email } });
        if (user) {
            if(data.password){
                const hashPassword=await bcrypt.hash(data.password, 10);
                data.password=hashPassword;
            }
            await user.update({
                name: data.name,
                email: data.email,
                password :data.password,
                role : data.role,
            });
            return {Message:user,status:true};
        }
        else{
            return {Message:"User not found.",status:false};
        }
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};
const deleteUser = async (users,data) => {
    try {
        if(users.role!=='manager'||users.role!=='supervisor'){
            return {Message:"You are not authorized to delete a user",status:false};
        }
        const user = await User.findOne({ where: { email: data.email } });
        if (user) {
            await user.destroy();
            return {Message:"User deleted successfully.",status:true};
        }
        else{
            return {Message:"User not found.",status:false};
        }
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};

const getAllUsers = async () => {
    try {
        if(data!=='manager'||data!=='supervisor'){
            return {Message:"You are not authorized to get all users",status:false};
        }
        const users = await User.findAll();
        return {Message:users,status:true};
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};

export {createUser,getUser,updateUser,deleteUser,getAllUsers};

