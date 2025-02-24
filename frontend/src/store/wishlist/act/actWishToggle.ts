import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actWishToggle = createAsyncThunk(
  "wishlist/actWishToggle",
  async (productId: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const isRecordExist = await axios.get(
        `https://buyit-production-3d3b.up.railway.app/wishlist?userId=1&productId=${productId}`
      );
      if (isRecordExist.data.length > 0) {
        await axios.delete(
          `https://buyit-production-3d3b.up.railway.app/wishlist/${isRecordExist.data[0].id}`
        );
        return { type: "remove", productId };
      } else {
        await axios.post(
          "https://buyit-production-3d3b.up.railway.app/wishlist",
          {
            userId: 1,
            productId,
          }
        );
        return { type: "add", productId };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpected Error.");
      }
    }
  }
);

export default actWishToggle;
