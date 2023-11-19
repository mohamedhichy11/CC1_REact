
import { useEffect, useState } from 'react'
import styles from './product.module.css'
import { useDarkMode } from '../contextDark/contextDark';
export default function ProductList() {
    const { isDark } = useDarkMode(); 

    useEffect(() => {
    
      document.body.style.backgroundColor = isDark ? "#000" : "#fff";
      document.body.style.color = isDark ? "#fff" : "#000";
  
      return () => {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
      };
    }, [isDark]);
    const [productList,setproductList]=useState([])
    const getprod=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(responsej=>setproductList(responsej))
    }
    useEffect(()=>{
        getprod()
    },[])

    const displayProduct=()=>{
        return productList.map((product,key)=>{
            return <tr key={key}  style={borderstyle}>
                <td  style={borderstyle}>{product.title}</td>
                <td  style={borderstyle} id={styles.tdPrix}>{product.price} Dh</td>
                <td  style={borderstyle}> <img width={150} src={product.image} alt={product.image} /></td>
            </tr>
        })
    }
    const borderstyle = {
        borderColor: isDark ? "#fff" : "#000", 
      };
    return <div className={styles.table_h1}  >
        <div id={styles.divAPI} > Liste des Produits :</div>
       <table style={borderstyle} >
        <thead>
            <tr  style={borderstyle}>
                <th  style={borderstyle}>Title</th>
                <th  style={borderstyle}>Price</th>
                <th  style={borderstyle}>Photo</th>
            </tr>
        </thead>
        <tbody>
          {displayProduct()}
        </tbody>
       </table>
    </div>
}

