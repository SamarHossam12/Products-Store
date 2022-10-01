import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../store/actions";

function Movies() {
    let [proList, setproList] = useState([]);
    let [page, setPage] = useState(0)
    let [limit, setlimit] = useState(20)
    let lang = useSelector((state) => state.lang)
    const dispatch = useDispatch()
   
    useEffect(() => {
        axios
            .get(
                `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`
            )
            .then((prodData) => {
                setproList(prodData.data);
                console.log(prodData.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    let goNext = () => {
        setPage(page+=limit)
        console.log(page)
    }
    let goPrev = () => {
        if (page > 0) {
            setPage(--page)
        }
        console.log(page)
    }

    return (
        <>
            <div className="container">

                <div className="row">
                    {proList.map((p) => (
                        <div
                            className="card col-3"
                        >
                            <img
                                class="card-img-top"
                                src={p.images}
                                alt="Card image"
                            />
                            <div class="card-body">
                                <Link to={`/movies/${p.id}`}>{p.title}</Link>
                              
                                <p class="card-text">Price : {p.price}</p>
                                <p class="card-text">Description : {p.description}</p>
                                <button class="btn btn-primary" onClick={() => dispatch(setFavorite(p))}>
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
                <button className="btn btn-success" onClick={goPrev}>Prev</button>
                <button className="btn btn-success" onClick={goNext}>Next</button>
            </div>
        </>
    );
}

export default Movies;
