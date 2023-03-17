import { ToDo as ToDo } from "../api/models/todo";
import { User } from "../api/models/user";

export default interface MessageResponse {
  message: string;
}

export interface ToDoResponse {
  surveys: ToDo[];
}

export interface UserResponse {
  users: User[];
}