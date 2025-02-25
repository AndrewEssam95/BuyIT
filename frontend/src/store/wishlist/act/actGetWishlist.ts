import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { TProduct } from "src/types/customTypes";

type TDataType = "productsFullInfo" | "productsIds";
type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI;
    const { registerAuth } = getState() as RootState;

    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `https://buyit-production-3d3b.up.railway.app/wishlist?userId=${registerAuth.user?.id}`,
        { signal }
      );

      if (!userWishlist.data.length) {
        return { data: [], dataType: "empty" };
      }

      if (dataType === "productsIds") {
        const concatenatedItemsId = userWishlist.data.map((el) => el.productId);

        return { data: concatenatedItemsId, dataType: "productsIds" };
      } else {
        const concatenatedItemsId = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");

        const response = await axios.get<TResponse>(
          `https://buyit-production-3d3b.up.railway.app/products?${concatenatedItemsId}`
        );
        return { data: response.data, dataType: "productsFullInfo" };
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

export default actGetWishlist;
