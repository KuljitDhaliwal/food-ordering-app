import React, { useEffect, useState } from 'react'
import { Theme } from '../Components/UI/Theme'
import { useFetchAPI } from '../Hooks/FetchAPI'
import { MenuCat } from '../StaticData/MenuCat'
import { BASEURL } from '../Services/api'
import Card from '../Components/Card'
import Button from '../Components/UI/Button'
import Hot from '../assets/images/icons/hot.png'
import Fork from '../assets/images/icons/fork.png'
import Cart from '../Components/Cart'
import CartIcon from '../Components/CartIcon'
import { useCart } from '../Hooks/CartContextHook'

function Menu() {
  const {state, dispatch} = useCart()
  const [activeDiv, setActiveDiv] = useState()
  const [mealPrice, setMealPrice] = useState([])
  const [active, setActive] = useState(1)
  const [seeFull, setSeeFull] = useState({ 1: false })
  const [showCart, setShowCart] = useState(false)
  const {
    fetchData: fetchCategories,
    loading: categoriesLoading,
    data: categoriesData,
    error: categoriesError } = useFetchAPI()

  const {
    fetchData: fetchOneCat,
    loading: fetchOneCatLoading,
    data: fetchOneCatData,
    error: fetchOneCatError } = useFetchAPI()


  const [foodCat, setFoodCat] = useState("")

  useEffect(() => {
    fetchCategories(`${BASEURL}/categories.php`, {
      method: 'GET'
    })
  }, [])


  //Select Category
  const handleCategory = async (item) => {
    setActiveDiv(item.idCategory)
    setActive(item.idCategory)
    await fetchOneCat(`${BASEURL}/search.php?s=${item.strCategory}`)
    setActiveDiv(null)
  }


  //Set Food Price
  const handleSetFoodPrices = () => {
    setMealPrice([])
    if(fetchOneCatData?.meals !== null){
      let arr = []
      fetchOneCatData?.meals.map(item => {
      setMealPrice(prev => [...prev, {...item, ['mealPrice']: Math.floor(Math.random() *20) + 10}])
      })
    }
  }

  useEffect(()=>{
    handleSetFoodPrices()
  },[fetchOneCatData?.meals, active, activeDiv])

  //Side Effect for Category

  useEffect(() => {
    const fun = async () => {
      await fetchOneCat(`${BASEURL}/search.php?s=Beef`)
    }
    fun()
  }, [])




  //Get string till third dot.
  const getExpected = (str) => {
    let map = new Map()
    let arr = []
    let count = 0
    for (let i = 0; i < str.length; i++) {
      if (count < 3) {
        arr.push(str[i])
        if (str[i] === '.') {
          count++
        }
      }
    }
    return arr.join("")
  }



  const handleClick = (item) => {
    setSeeFull({ [item.idMeal]: seeFull[item.idMeal] ? false : true })
  }

  const handleCart = (item) => {
    if(state.cart.some(e=>e.idMeal === item.idMeal)){
      dispatch({
        type: 'Remove_From_Cart',
        payload: item
      })
    }else{
        dispatch({
        type: 'Add_To_Cart',
        payload: {...item, ['quantity']: 1}
      })
    }
  }



  useEffect(() => {
    const scrollFun = () => {
      const height = window.scrollY


      if (height > 300) {
        setShowCart(true)
      } else {
        setShowCart(false)
      }

    }
    window.addEventListener('scroll', scrollFun)
    return ()=> window.removeEventListener('scroll', scrollFun)
  }, [])






  return (
    <div className={`relative px-2 max-w-7xl m-auto py-4`}>
      {showCart && (
        <div className="fixed bottom-6 right-5 -translate-x-1/2 z-100 active:scale-95">
            <CartIcon className={`bg-amber-600 p-4 rounded-full shadow-2xl text-white 
          hover:scale-110 transition-transform`}/>
        </div>
      )}
      <p className='absolute -z-10 -top-25 lg:text-[20em] 
        md:text-[10em] mont-font font-extrabold text-yellow-400/10 left-1/2 -translate-x-1/2'>
        FOOD
      </p>
      <p className='title mont-regular text-6xl text-center text-amber-800 font-extrabold'>Menu</p>
      <p className='m-auto text-center font-light max-w-100 '>Thoughtfully crafted dishes made with fresh ingredients, bold flavors, and a passion for good food</p>


      {/* Menu Headers */}
      <div className='mt-10 sticky top-5'>
        {categoriesLoading ? (
          <div className='w-full rounded-4xl py-3 animate-pulse bg-gray-500/50 grid place-items-center'>
            <p className='p-5'>Loading...</p>
          </div>
        ) : categoriesError ? (
          <div className='text-red-500 text-center'>
            <p>Error: {error}</p>
          </div>
        ) : categoriesData && categoriesData.categories ? (
          <div className='flex gap-2 justify-between py-3 px-1 bg-white rounded-4xl 
          border border-gray-400/50 font-semibold max-w-7xl overflow-x-auto'>
            {categoriesData.categories.map((item, key) => {
              return <div role='button' key={item.idCategory} onClick={() => handleCategory(item)}
                className={`flex cursor-pointer items-center relative 
              shrink-0 gap-1 hover:bg-yellow-100/50 md:p-3 p-2 rounded-2xl 
              transition-all duration-300 ${active == item.idCategory ? 'bg-yellow-400' : ''}`}>
                <img src={item.strCategoryThumb} alt="Thumbnail" className='h-10' />
                {item.strCategory}
                {(fetchOneCatLoading && activeDiv === item.idCategory) &&
                  <div className="absolute grid place-items-center bg-white
                    border border-gray-400/50 animate-pulse inset-0 rounded-2xl z-10 cursor-not-allowed">
                    <p>Loading...</p>
                  </div>
                }
              </div>
            })}
          </div>
        ) : null
        }
      </div>


      {/* Show Dishes as per categories */}
      <div className='px-2'>
        {fetchOneCatLoading ? (
          <div className='rounded-4xl h-100 mt-10 bg-gray-400/50 grid place-items-center'>
            <p>Loading...</p>
          </div>
        ) : mealPrice.length === 0 ? (
          <div className='rounded-4xl mt-10  p-5 shadow-2xl bg-white'>
            <div className='rounded-4xl grid place-items-center w-full p-4 border border-dashed border-amber-600/50'>
              <img src={Hot} alt="icon" className='h-40' />
              <p className='font-semibold text-lg'>No dishes available right now</p>
              <div className="flex gap-2 items-center max-w-100 justify-center">
                <div className="left bg-linear-90 h-0.5 w-full from-yellow-100 to-yellow-500"></div>
                <img src={Fork} alt="fork icon" className='h-8' />
                <div className="right bg-linear-90 h-0.5 w-full from-yellow-500 to-yellow-100"></div>
              </div>
              <p className='text-gray-400 text-center font-light'>
                We are cooking up something delicious!
              </p>
              <p className='text-gray-400 text-center font-light'>
                Please select another category to explore our menu.
              </p>
            </div>
          </div>
        ) :
          mealPrice.length !== 0 ? (
            <div className='w-full rounded-2xl mt-10 grid gap-6'>
              {mealPrice.map((item, key) => {
                return <div key={key} className={`${key % 2 === 0 ? 'md:flex-row-reverse' : ''} flex md:flex-row flex-col-reverse gap-4`}>
                  <div className={`flex-1 flex ${key % 2 !== 0 ? 'justify-end' : ''} border-b border-gray-400/50 py-5`}>
                    <div>
                      <p className='text-2xl font-semibold'>{item.strMeal}</p>
                      <p className='font-light max-w-150'>
                        {seeFull[item.idMeal] ? item.strInstructions : getExpected(item.strInstructions)}
                      </p>
                      <p className='text-right underline font-extralight text-[10px] cursor-pointer mt-3'
                        onClick={() => handleClick(item)}>
                        {seeFull[item.idMeal] ? 'Show Less' : 'See Full Receipe'}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <p className='font-bold text-2xl 
                        bg-black rounded-full w-15 h-15 grid place-items-center text-white'>${item.mealPrice}</p>

                        <Button children={state.cart.some(e=>e.idMeal === item.idMeal) ? 'Remove from Cart' : 'Add to Cart'} 
                        onClick={()=> handleCart(item)} 
                        className={Theme.buttonGradient} />
                      </div>
                    </div>
                  </div>
                  <div className={`${key % 2 === 0 ? 'ml-0' : ''} md:h-100 md:w-100 p-1 bg-amber-400 rounded-full shrink-0`}>
                    <img src={item.strMealThumb} alt="Meal Image" className='rounded-full h-full w-full object-cover' />
                  </div>
                </div>
              })}
            </div>
          ) : (<div>No dishes select right now</div>)
        }
      </div>




    </div>
  )
}

export default Menu