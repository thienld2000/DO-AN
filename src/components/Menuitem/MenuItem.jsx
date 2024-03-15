
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectAllProducts } from "../../stores/menu/productSlice"
import { React, useEffect, useState } from 'react'
import { Tabs } from "./Tabs"
import ProductDetailCard from "../Product/ProductDetailCard"
import './MenuItem.css';

const MenuItem = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const onTabSwitch = (newActiveTab) => {
    setActiveTab(newActiveTab);
    let categories = products.products.map((product) => product.name.name);
    let index = categories.findIndex(category => newActiveTab === category);
    console.log(index);
    if (index > -1) {
      setActiveTabIndex(index);
    } else {
      setActiveTabIndex(0);
    }
  }
  return (
    <div className="app__menuitem">
      {
        products.status !== 'fulfilled' ?
          <div>loading ... </div> :
          <div className=".app__menuitem-head ">
            {
              products.products &&
              <Tabs
                list={products.products.map((product) => product.name.name)}
                activeTab={activeTab}
                onTabSwitch={onTabSwitch}
              />
            }
            <div className="app__menuitem-sub">
              {
                products.products && products.products[activeTabIndex].products.map((product, index) => {
                  return (
                    <ProductDetailCard key={index} product={product} />
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default MenuItem
