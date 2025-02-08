// src/components/CommentForm.tsx
import React, { useState } from 'react';
import { Comment } from '../types';

interface CommentFormProps {
  postId: number;
  onAddComment: (postId: number, comment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onAddComment }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      postId,
      author,
      content,
     
::contentReference[oaicite:0]{index=0}
 
