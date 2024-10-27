import React, { useEffect, useState } from "react";
import { ListPresentation } from "./list.presentation";
import Modal from "./Modal";
import CatService from "../../services/cat/CatService";
import DogService from "../../services/dog/DogService";
import { useLocation } from "react-router-dom";

export const ListDogsAndCats = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const getApis = async () => {
      if (location.pathname === "/gatos") {
        const cats = await CatService.getCats();
        setData(cats);

        const favoritesCat = await CatService.getCatFavorites();
        setFavoritesData(favoritesCat);
      } else {
        const dogs = await DogService.getDogs();
        setData(dogs);

        const favoritesDog = await DogService.getDogFavorites();
        setFavoritesData(favoritesDog);
      }
    };

    getApis();
  }, [location.pathname]);

  const addFavoriteHandler = async (id) => {
    try {
      if (location.pathname === "/gatos") {
        await CatService.postCatFavorite({
          image_id: id,
          sub_id: "my-user-1234",
        });
        const updatedFavoritesCats = await CatService.getCatFavorites();
        setFavoritesData(updatedFavoritesCats);
      } else {
        await DogService.postDogFavorite({
          image_id: id,
          sub_id: "my-user-1234",
        });
        const updatedFavoritesDogs = await DogService.getDogFavorites();
        setFavoritesData(updatedFavoritesDogs);
      }
    } catch (error) {
      console.error(
        "Error adding favorite:",
        error.response?.data || error.message
      );
    }
  };

  const openModalHandler = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  return (
    <>
      <ListPresentation
        data={data}
        location={location}
        addFavoriteHandler={addFavoriteHandler}
        openModalHandler={openModalHandler}
        favoritesData={favoritesData}
      />
      <Modal isOpen={isModalOpen} onClose={closeModalHandler} petDetails={selectedPet} />
    </>
  );
};
