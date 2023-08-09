import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import Modals from "../../Components/Modals/Modals";
import swal from "sweetalert";
import { FileInput, Label, TextInput } from "flowbite-react";

const PanelAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [allFoods, setAllFoods] = useState([]);
  const [foodNameInput, setFoodNameInput] = useState('');
  const [foodCategoryInput, setFoodCategoryInput] = useState('');
  const [foodCountInput, setFoodCountInput] = useState(null);
  const [foodPriceInput,setFoodPriceInput] = useState(null);
  const [foodDescInput, setFoodDescInnput] = useState('');
  const [foodImageInput, setFoodImage] = useState(null);
  

  useEffect(() => {
    getAllFood();
  }, []);

  const getAllFood = () => {
    fetch("https://fastfoodshop.iran.liara.run/foods")
      .then((res) => res.json())
      .then((data) => {
        setAllFoods(data.reverse());
      });
  };

  const removeInPanel = (foodID) => {
    fetch(`https://fastfoodshop.iran.liara.run/foods/${foodID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        swal({
          title: "غذای مورد نظر حذف شد",
          icon: "success",
          buttons: "تایید",
        }).then((value) => {
          getAllFood();
        });
      });
  };

  const onSubmit = ()=>{
    const addNewFood = {
      name:foodNameInput,
      price:foodPriceInput,
      desc:foodDescInput,
      src:foodImageInput,
    }
    fetch('https://fastfoodshop.iran.liara.run/foods',{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body : JSON.stringify(addNewFood)
    }).then(res=>res.json())
    .then(data=>{
      getAllFood()
      setOpenModal(false)
      swal({
        title:'محصول شما اضافه شد',
        icon:'success',
        buttons: 'تایید'
      })
    })
  }

  return (
    <>
      <div className="h-[150px]">
        <Navbar />
      </div>
      <div className="container">
        <Title title={"پنل مدیریت"} />
        <div className="relative overflow-x-hidden shadow-md sm:rounded-lg max-h-80 overflow-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 sm:block hidden">
                  <span className="sr-only">عکس</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  تعداد
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  حذف محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  ویرایش محصول
                </th>
              </tr>
            </thead>
            <tbody>
              {allFoods.map((food) => (
                <tr
                  key={food.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-32 p-4 hidden sm:block">
                    <img src={food.src} alt="Apple Watch" />
                  </td>
                  <td className=" font-DanaMedium text-xs sm:text-base text-gray-900 dark:text-white">
                    {food.name}
                  </td>
                  <td className="px-4 sm:px-8 py-4 font-MorabbaMedium text-base">
                    {food.count}
                  </td>

                  <td className="font-DanaDemiBold text-xs md:text-base text-gray-900 dark:text-white">
                    {food?.price.toLocaleString()}
                  </td>
                  <td className="px-2 md:px-6 py-4">
                    <button
                      onClick={() => removeInPanel(food.id)}
                      className="font-medium text-red-600 font-DanaDemiBold dark:text-red-500 hover:underline"
                    >
                      حذف
                    </button>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      href="#"
                      onClick={() => updateFoos(food.id)}
                      className="font-medium text-blue-600 font-DanaDemiBold hover:underline"
                    >
                      ویرایش
                    </button>
                  </td>
                    {/* <Modals
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      title="ویرایش محصول"
                    /> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 py-5 flex items-center justify-center text-white">
          <button
            className="w-full py-3 rounded-lg bg-orange-500"
            onClick={() => setOpenModal(true)}
          >
            افزودن محصول جدید
          </button>
        </div>
      </div>
      <Modals
        openModal={openModal}
        onSubmit={onSubmit}
        onClose={setOpenModal}
        title="افزودن محصول"
      >
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text1" value="نام محصول" />
            </div>
            <TextInput onChange={(e)=>setFoodNameInput(e.target.value)} value={foodNameInput} id="text1" required type="text" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text1" value="دسته بندی محصول" />
            </div>
            <TextInput onChange={(e)=>setFoodCategoryInput(e.target.value)} value={foodCategoryInput} id="text1" required type="text" placeholder="pizza,sandwich,drink,appetizer" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text1" value="تعداد محصول" />
            </div>
            <TextInput onChange={(e)=>setFoodCountInput(e.target.value)} value={foodCountInput} id="text1" required type="text" placeholder="10" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text2" value="قیمت" />
            </div>
            <TextInput id="text2" onChange={(e)=>setFoodPriceInput(e.target.value)} value={foodPriceInput} required type="text" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text2" value="توضیحات" />
            </div>
            <TextInput sizing="lg" id="text2" onChange={(e)=>setFoodDescInnput(e.target.value)} value={foodDescInput} required type="text" />
          </div>
          <div id="fileUpload">
            <div className="mb-2 block">
              <Label htmlFor="file" value="عکس محصول" />
            </div>
            <FileInput type="file" onChange={(e)=>setFoodImage(e.target.files[0])} required />
          </div>
        </form>
      </Modals>
    </>
  );
};

export default PanelAdmin;
