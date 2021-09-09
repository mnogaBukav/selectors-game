import MedList from '../lists/MedList';

const animationClassName = 'anime';
export const targetAttribute = 'data-target';

class TableElement {
  constructor({ name, children, target, id, className }) {
    this.name = name;
    this.children = children;
    this.target = target;
    this.id = id;
    this.className = className;
  }

  create(index) {
    let ind = index;
    this.element = MedList[this.name]();

    this.element.setAttribute('data-index', ind);
    ind += 1;

    if (this.children.length) {
      this.children.forEach((element) => {
        const childElement = new TableElement(element);
        this.element.appendChild(childElement.create(ind));
        ind += 1;
      });
    }

    if (this.id === 'square') {
      this.element.classList.add('square-patch');
    }
    if (this.id) {
      this.element.setAttribute('id', this.id);
    }
    if (this.className) {
      this.element.classList.add(this.className);
    }

    if (this.target) {
      this.element.classList.add(animationClassName);
      this.element.setAttribute(targetAttribute, 'true');
    }
    return this.element;
  }
}

export default TableElement;
