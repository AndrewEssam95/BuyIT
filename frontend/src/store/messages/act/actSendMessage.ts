import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TMessage } from "src/types/customTypes";

const actSendMessage = createAsyncThunk(
  "messages/actSendMessage",
  async (messageDetails: TMessage, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.post(
        "https://buyit-production-3d3b.up.railway.app/messages",
        {
          messageDetails,
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpected Error.");
      }
    }
  }
);

export default actSendMessage;
