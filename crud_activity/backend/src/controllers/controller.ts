import { Request, Response } from "express";
import { data } from "../db";

// get data
export const getData = (_: Request, res: Response): void => {
  res.json(data);
};

// create
export const createData = (req: Request, res: Response): void => {
  const newItem = { id: Date.now().toString(), ...req.body };
  data.push(newItem);
  res.status(201).json(newItem);
};

// update data
export const updateData = (req: Request, res: Response): void => {
  const { id } = req.params;
  const index = data.findIndex(item => item.id === id);
  if (index === -1) {
    res.status(404).json({ message: "not found" });
    return;
  }
  data[index] = { ...data[index], ...req.body };
  res.json(data[index]);
};

// dlete data

export const deleteData = (req: Request, res: Response): void => {
  const { id } = req.params;
  const index = data.findIndex(item => item.id === id);
  if (index === -1) {
    res.status(404).json({ message: "not found" });
    return;
  }
  data.splice(index, 1);
  res.json({ message: "deleted" });
};