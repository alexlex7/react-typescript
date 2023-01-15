//====== add types for props

// interface Props {
//   headerText: string;
// }

// export default function DescribingProps({ headerText }: Props) {
//   return <h1>{headerText}</h1>;
// }

//======== Optional props

// interface Props {
//   headerText: string;
//   extraText?: string;
// }

// export default function DescribingProps({ headerText, extraText }: Props) {
//   return (
//     <>
//       <h1>{headerText}</h1>
//       {extraText && <p>{extraText}</p>}
//     </>
//   );
// }

//========  Default props

interface Props {
  headerText: string;
  extraText?: string;
}

export default function DescribingProps({ headerText, extraText = 'default text' }: Props) {
  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
    </>
  );
}
