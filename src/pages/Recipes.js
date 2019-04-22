import React, { Component } from 'react'
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
    state = {
        recipes: recipeData,
        search: '',
        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query: '&q=',
        error: ''
    }

    getRecipes = async () => {
        try {
            const response = await fetch(this.state.url);
            const data = await response.json()
            if (!data.recipes.length) {
                this.setState({
                    error: 'Sorry but your search did not return any recipes, Please try again or press search icon for the most pupular recipes'
                })
            }
            else {
                this.setState({
                    recipes: data.recipes,
                    error: ''
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getRecipes()
    }

    handelChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const { base_url, query, search } = this.state
        this.setState({
            url: `${base_url}${query}${search}`,
            search: ''
        }, () => this.getRecipes());
    }
    render() {
        const { recipes, search, error } = this.state;
        return (
            <React.Fragment>
                <Search
                    search={search}
                    handelChange={this.handelChange}
                    handelSubmit={this.handelSubmit}
                />
                {this.state.error ?
                    (<section className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h4 className='text-orange text-center text-uppercase mt-5'>
                                    {error}
                                </h4>
                            </div>
                        </div>
                    </section>
                    ) :
                    (<RecipeList recipes={recipes} />)
                }
            </React.Fragment>

        )
    }
}