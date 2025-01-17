import { getALLcarros, getCarroBySigla, createCarro as modelCreateCarro, updateCarro as modelUpdateCarro, deleteCarro as modelDeleteCarro} from "../models/carroModel";

export const getCarros = (req, res) => {
    // Chama a função que retorna a todos os carros do array
    const carros = getALLcarros();
    // Retorna os carros com status 200 (ok)
    res.status(200).json(carros)
}