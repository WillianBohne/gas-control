import { insert, getAll, update, remove } from "../data/ConsumoDAO.js"

const handleIsert = async (consumo) => {
    const result = {
        status: 200,
        data: {}

    }
    try {
        result.data = await insert(consumo)
    } catch (error) {
        result.status = 500
        result.data = error.menssage
    }
}

const handleGetAll = async () => {
    const result = {
        status: 200,
        data: []
    }

    try {
        result.data = await getAll()
    } catch (error) {
        result.status = 500
        result.data = error.menssage
    }

}

const handleUpdate = async (consumo) => {
    const result = {
        status: 200,
        data: []
    }

    try {
        result.data = await update(consumo)
    } catch (error) {
        result.status = 500
        result.data = error.menssage
    }

}

const handleRemove = async (id) => {
    const result = {
        status: 200,
        data: []
    }

    try {
        result.data = await remove(id)
    } catch (error) {
        result.status = 500
        result.data = error.menssage
    }

}

export { handleIsert, handleGetAll, handleUpdate, handleRemove }