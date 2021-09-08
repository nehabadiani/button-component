import OutlineButton from './components/OutlineButton'
import DefaultButton from './components/DefaultButton'
import TextButton from './components/TextButton'
import ShadowDisableButton from './components/ShadowDisableButton'
import DisabledButton from './components/DisabledButton'
import AddToCart from './components/AddToCart'
import MultiSizeButton from './components/MultiSizeButton'
import MultiColourButton from './components/MultiColourButton'
import MultiColourHover from './components/MultiColourHover'
const App = () => {
  return (
    <>
      <DefaultButton />
      <OutlineButton />
      <TextButton />
      <ShadowDisableButton />
      <DisabledButton />
      <AddToCart />
      <MultiSizeButton />
      <MultiColourButton />
      <MultiColourHover />
    </>
  )
}

export default App
