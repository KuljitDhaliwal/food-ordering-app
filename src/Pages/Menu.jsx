import React, { useEffect, useMemo, useRef, useState } from 'react'
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
import Load from '../assets/images/loading.png'
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

function Menu() {
  const { state, dispatch } = useCart()
  const [activeDiv, setActiveDiv] = useState()
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef()
  const [isLoadind, setIsLoading] = useState(false)
  const [mealPrice, setMealPrice] = useState([])
  const [screenHeight, setScreenHeight] = useState(0)
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


  const {
    fetchData: fetchSearch,
    loading: fetchSearchLoading,
    data: fetchSearchData,
    error: FetchSearchError
  } = useFetchAPI()


  const [foodCat, setFoodCat] = useState("")
  useEffect(() => {
    fetchCategories(`${BASEURL}/categories.php`, {
      method: 'GET'
    })
  }, [])


  //Select Category
  const handleCategory = async (item) => {
    setSearch('')
    setShowSearch(false)
    setActiveDiv(item.idCategory)
    setActive(item.idCategory)
    await fetchOneCat(`${BASEURL}/search.php?s=${item.strCategory}`)
    setActiveDiv(null)
  }


  //Set Food Price
  const handleSetFoodPrices = () => {
    setMealPrice([])
    console.log('Dhoore', search)
    let getdata = search.trim() !== '' ? fetchSearchData?.meals : fetchOneCatData?.meals;
    if (!Array.isArray(getdata)) return [];
    if (getdata !== null || getdata !== undefined) {
      let arr = []
      getdata.map(item => {
        setMealPrice(prev => [...prev, { ...item, ['mealPrice']: Math.floor(Math.random() * 20) + 10 }])
      })
    }
  }

  useEffect(() => {
    handleSetFoodPrices()
  }, [fetchOneCatData?.meals, fetchSearchData?.meals, active, activeDiv, search])

  //Side Effect for Category
  useEffect(() => {
    const fun = async () => {
      await fetchOneCat(`${BASEURL}/search.php?s=Beef`)
    }
    fun()
  }, [])


  ///Search Meals debounce method
  const debounceFun = (fun, delay) => {
    let timer = 0
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fun(...args)
      }, delay)
    }

  }

  const handleSearch = (e) => {
    const searchFun = async () => {
      await fetchSearch(`${BASEURL}/search.php?s=${e}`)
      setIsLoading(false)
    }
    setSearch(e)
    searchFun()
  }

  const runFun = useMemo(() => {

    return debounceFun(handleSearch, 300)
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
    if (state.cart.some(e => e.idMeal === item.idMeal)) {
      dispatch({
        type: 'Remove_From_Cart',
        payload: item
      })
    } else {
      console.log("Dispatching...");
      dispatch({
        type: 'Add_To_Cart',
        payload: { ...item, ['quantity']: 1 }
      })
    }
  }



  //Set cart to local
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('Cart')) || []
    console.log('LocalData', localData)
    localStorage.setItem('Cart', JSON.stringify(state.cart))
  }, [state.cart])


  



  useEffect(() => {
    const scrollFun = () => {
      const height = window.scrollY
      setScreenHeight(height)
      if (height > 300) {
        setShowCart(true)
      } else {
        setShowCart(false)
      }

    }
    window.addEventListener('scroll', scrollFun)
    return () => window.removeEventListener('scroll', scrollFun)
  }, [])



  //Handle ShowSearch
  const handleShowSearch = () => {
    setShowSearch(true)
    setTimeout(() => {
      searchRef.current.focus()
    }, 0);
  }



  return (
    <div className={`relative px-2 max-w-7xl m-auto py-4`}>
      {showCart && (
        <div className="fixed bottom-6 right-5 -translate-x-1/2 z-100 active:scale-95">
          <CartIcon className={`bg-amber-600 p-4 rounded-full shadow-2xl text-white 
          hover:scale-110 transition-transform`} />
        </div>
      )}
      <p className='absolute -z-10 -top-25 lg:text-[20em] 
        md:text-[10em] mont-font font-extrabold text-yellow-400/10 left-1/2 -translate-x-1/2'>
        FOOD
      </p>
      <p className='title mont-regular text-6xl text-center text-amber-800 font-extrabold'>Menu</p>
      <p className='m-auto text-center font-light max-w-100 '>Thoughtfully crafted dishes made with fresh ingredients, bold flavors, and a passion for good food</p>

      {/* Menu Headers */}
      <div className={`mt-10 ${showCart ? 'fixed md:w-full w-11/12' : 'relative w-full'} max-w-7xl  
      left-1/2 -translate-x-1/2 transition-all border border-gray-400/50 bg-white rounded-4xl 
       px-2 duration-300 top-0`}>
        <div className={`flex gap-2 py-3`}>
          {categoriesLoading ? (
            <div className='w-full rounded-4xl py-3 animate-pulse bg-gray-500/50 grid place-items-center'>
              <p className='p-5'>Loading...</p>
            </div>
          ) : categoriesError ? (
            <div className='text-red-500 text-center'>
              <p>Error: {error}</p>
            </div>
          ) : categoriesData && categoriesData.categories ? (
            <div className='flex gap-2 justify-between   
              font-semibold max-w-7xl overflow-x-auto'>
              {categoriesData.categories.map((item, key) => {
                return <div role='button' key={item.idCategory} onClick={() => handleCategory(item)}
                  className={`flex cursor-pointer items-center relative 
                  shrink-0 gap-1 hover:bg-yellow-100/50 md:p-3 p-2 px-3 rounded-3xl 
                  transition-all duration-300 ${active == item.idCategory ? 'bg-yellow-400' : ''}`}>
                  <img loading="lazy" src={item.strCategoryThumb} alt="Thumbnail" className='md:h-10 h-6' />
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
          <div className='border w-fit shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.2)] 
          border-gray-400/50 rounded-2xl self-center relative flex items-center'>
            <div className={`${showSearch ? 'flex' : 'md:flex hidden'} items-center`}>
              <input type="search" value={search} ref={searchRef} placeholder='Search meals...' onChange={(e) => { setIsLoading(true), runFun(e.target.value), setSearch(e.target.value) }}
                className='rounded-2xl py-2 px-3' />
              {isLoadind && <img src={Load} alt="Loading" className='h-8 absolute  right-11 animate-spin' />}
            </div>
            <div className='py-2 px-2 md:hidden flex cursor-pointer' onClick={() => showSearch ? (setSearch(''), setShowSearch(false)) : handleShowSearch()}>
              {showSearch ? (<LiaTimesSolid className='text-2xl' />) : (<IoSearch className='text-2xl' />)}
            </div>
          </div>
        </div>
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

                        <Button children={state.cart.some(e => e.idMeal === item.idMeal) ? 'Remove from Cart' : 'Add to Cart'}
                          onClick={() => handleCart(item)}
                          className={`${state.cart.some(e => e.idMeal === item.idMeal) ? `${Theme.deleteBtn} text-white` : Theme.buttonGradient} cursor-pointer`} />
                      </div>
                    </div>
                  </div>
                  <div className={`${key % 2 === 0 ? 'md:ml-0' : ''} md:h-100 h-60 w-60 md:w-100 p-1 m-auto bg-amber-400 rounded-full shrink-0`}>
                    <img loading="lazy" src={item.strMealThumb} alt="Meal Image" className='rounded-full md:h-full h-60 object-cover' />
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