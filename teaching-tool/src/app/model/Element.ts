interface Element {
  answer?: string;
  clicked: boolean;
  element: string;
  isPairFound: boolean;
  type: 'question' | 'answer';
}

const defaultQuestion: Element = {
  answer: '',
  clicked: false,
  element: '',
  isPairFound: false,
  type: 'question',
};

const defaultAnswer: Element = {
  clicked: false,
  element: '',
  isPairFound: false,
  type: 'answer',
};

export default Element;
export { defaultAnswer, defaultQuestion };
