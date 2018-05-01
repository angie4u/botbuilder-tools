import { IFileService, ServiceType } from '../schema';
import { ConnectedService } from './connectedService';
export declare class FileService extends ConnectedService implements IFileService {
    readonly type: ServiceType;
    filePath: string;
    constructor(source?: IFileService);
    toJSON(): IFileService;
}
