import { usePage } from "@inertiajs/react";
import ReactMarkdown from "react-markdown";
import React,{useEffect} from "react";
import UserAvatar from "./UserAvatar";
import { formatMessageDateLong } from "@/helpers";
import MessageAttachments from "./MessageAttachments";
import MessageOptionsDropdown from "./MessageOptionsDropdown";

const MessageItem = ({ message, attachmentClick }) => {
    const currentUser = usePage().props.auth.user;
    console.log(message)
    return (
        <div
            className={
                "chat " +
                (message.sender_id === currentUser.id
                    ? "chat-end"
                    : "chat-start")
            }
        >
            <UserAvatar user={message.sender} />

            <div className="chat-header">
                {message.sender_id !== currentUser.id
                    ? message.sender.name
                    : ""}
                <time className="text-xs opacity-50 ml-2">
                    {formatMessageDateLong(message.created_at)}
                </time>
            </div>

            <div
                className={
                    "chat-bubble relative " +
                    (message.sender_id === currentUser.id
                        ? " chat-bubble-info"
                        : "")
                }
            >
                {currentUser.is_admin && ( 
                        message.sender_id === currentUser.id && (
                            <MessageOptionsDropdown message={message} />
                        )
                )}
                <div className="chat-message">
                    <div className="chat-message-content">
                        <ReactMarkdown>{message.message}</ReactMarkdown>
                    </div>
                    <MessageAttachments
                        attachments={message.attachments}
                        attachmentClick={attachmentClick}
                    />
                    {/* O'qilgan yoki o'qilmagan xabarlar holatini ko'rsatish faqat siz yuborgan xabarlarda */}
                    {message.sender_id === currentUser.id && (
                        <div className="text-xs opacity-100 text-white mt-1">
                            {message.is_read ? "O'qilgan" : "O'qilmagan"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageItem;
