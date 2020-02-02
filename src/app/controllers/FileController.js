import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    /**
     * o upload n faz nenhuma referencia ao id de quem envia
     */
    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
