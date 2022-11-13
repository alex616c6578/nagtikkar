import path from 'path';

export class PathService {

    getDatabaseFilePath = ({ databaseFileName }: { databaseFileName: string }) => {
        return path.join(__dirname, '..', path.sep, '..', path.sep, databaseFileName)
    }
}