import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
import {HotelSearchResponse, HotelType} from '../../backend/src/shared/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
    // method:"GET",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};
export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: hotelFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }

  return response.json();
};

export const fetchMyHotels = async (): Promise<HotelType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

  return response.json();
};

export const fetchMyHotelById = async (hotelId: string): Promise<HotelType>=>{
   const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`,{
    credentials: "include",
   });
   if(!response.ok){
    throw new Error("Error fetching Hotels");
   }
   return response.json();
};

export const updateMyHotelById = async (hotelFormData:FormData) =>{
  const response= await fetch(`${API_BASE_URL}/api/my-hotels/${hotelFormData.get("hotelId")}`,{
    method: "PUT",
    body: hotelFormData,
    credentials:"include",
  });
  if(!response.ok){
    throw new Error("Failed to update Hotel");
   }
   return response.json();
}

export type SearchParams ={
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  adultCount?: string;
  childCount?: string;
  page?: string;
  facilities?: string[];
  types?: string[];
  stars?: string[];
  maxPrice?: string;
  sortOption?: string;
};

export const searchHotels  = async (searchParams: SearchParams): Promise<HotelSearchResponse>=>{
  const queryparams = new URLSearchParams();
  queryparams.append("destination", searchParams.destination || "");
  queryparams.append("checkIn", searchParams.checkIn || "");
  queryparams.append("checkOut", searchParams.checkOut || "");
  queryparams.append("adultCount", searchParams.adultCount || "");
  queryparams.append("childCount", searchParams.childCount || "");
  queryparams.append("page", searchParams.page || "");

  queryparams.append("maxPrice", searchParams.maxPrice || "");
  queryparams.append("sortOption", searchParams.sortOption || "");

  searchParams.facilities?.forEach((facility) =>
   queryparams.append("facilities", facility)
  );

  searchParams.types?.forEach((type) => queryparams.append("types", type));
  searchParams.stars?.forEach((star) => queryparams.append("stars",star));

   
  const response = await fetch (`${API_BASE_URL}/api/hotels/search?${queryparams}`);

  if(!response.ok){
    throw new Error("Error fetching hotels");
   }
   return response.json();
}