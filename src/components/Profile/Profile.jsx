import React from 'react';
import cn from './index.module.css';
import Post from './Post'
import ProfileInfo from "./ProfileInfo";
import Preloader from "../common/Preloader";
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../common/FormComponents/FormComponents";
import {maxValueCreator, required} from "../common/validate/validate";

const maxLength50 = maxValueCreator(50);

let NewPostForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField("newPost", Textarea,"Add new post...",[required, maxLength50])}
            </div>
            <button>Add post</button>
        </form>
    )
};

NewPostForm = reduxForm({form: "addPost"})(NewPostForm);

const Profile = (props) => {
    if (!props.profileInfo) return <Preloader/>

    let postElements = props.postList.map(({id, likes, text, img}) => <Post text={text} key={id} ava={img}
                                                                            likes={likes}/>);


    let addPost = (formData) => {
        props.onAddPost(formData.newPost);
    };
    return (
        <div className={cn.profile}>
            <ProfileInfo profileInfo={props.profileInfo}
                         isOwner = {props.isOwner}
                         status={props.status}
                         setStatus={props.setStatus}
                         setAvatar={props.setAvatar}
                         isLoadingAvatar={props.isLoadingAvatar}/>
            <NewPostForm onSubmit = {addPost}/>
            <div className={cn.posts}>
                {
                    postElements
                }
            </div>
        </div>
    );
};

export default Profile;
