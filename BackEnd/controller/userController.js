import express from "express";
import jwt from "jsonwebtoken";
import { createUser,getAllUsers,getUser,updateUser,deleteUser } from "../service/userService.js";

const createUserController=async(req,res)=>{
    try{
        const user = await createUser(req.user,req.body);
        return res.json({Message:user.Message,status:user.status});
    }
    catch(err){
        return res.json({Message:err.Message,status:false});
    }
}

const getallUserController=async(req,res)=>{
    try{
        const user= await getAllUsers(req.user.role);
        return res.json({message:user.Message,staus:user.status});
    }
    catch(err){
        return res.json({Message:err.message,status:false});
    }
}

const getUserController=async(req,res)=>{
    try{
        const user=await getUser(req.user);
        return res.json({Message:user.Message,status:true});
    }
    catch(err){
        return res.json({Message:err.message,status:false});
    }
}
const updateUserController=async(req,res)=>{
    try{
        const user=await updateUser(req.user,req.body);
        return res.json({Message:user.Message,status:true});
    }
    catch(err){
        return res.json({Message:err.Message,staus:false});
    }
}

const deleteUserController = async(req,res)=>{
    try{
        const user=await deleteUser(req.user.role,res.body);
        return res.json({Message:user.Message,status:true});
    }
    catch(err){
        return res.json({Message:err.Message,status:false});
    }
}

export {createUserController,getUserController,getallUserController,updateUserController,deleteUserController};