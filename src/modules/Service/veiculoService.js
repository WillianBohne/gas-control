import { insert, getAll, update, remove } from "../data/VeiculoDAO.js"

const handleIsert = async (veiculo) => {
    const result = {
        status: 200,
        data: {}

    }
    try {
        result.data = await insert(veiculo)
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

const handleUpdate = async (veiculo) => {
    const result = {
        status: 200,
        data: []
    }

    try {
        result.data = await update(veiculo)
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