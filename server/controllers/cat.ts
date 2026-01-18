import Cat, { ICat } from '../models/Patients';
import BaseCtrl from './base';

class CatCtrl extends BaseCtrl<ICat> {
  model = Cat;
}

export default CatCtrl;
