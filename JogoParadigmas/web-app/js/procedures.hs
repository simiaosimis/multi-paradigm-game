import Haste.Foreign
import Haste.Prim (toJSStr)

line :: Float -> Float -> Float -> Float -> IO [Float]
line x1 y1 x2 y2 = return $ tail (reverse (generate m b 950))
	where dify = y2 - y1
              difx = x2 - x1
              m = dify/difx
 	      b = m*(-x1) + y1

generate :: Float -> Float -> Float -> [Float]
generate m b xn
		| xn >= 0 = xn:y:generate m b (xn-10)
		| otherwise = [y]
		where y =  m*xn + b


main = do
  export (toJSStr "line") line