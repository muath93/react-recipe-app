import React, { Component } from 'react'
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
    state = {
        recipes: recipeData,
        search: ''
    }
    handelChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { recipes, search } = this.state;
        return (
            <React.Fragment>
                <Search
                    search={search}
                    handelChange={this.handelChange}
                    handelSubmit={this.handelSubmit}
                />
                <RecipeList recipes={recipes} />
            </React.Fragment>
        )
    }
}