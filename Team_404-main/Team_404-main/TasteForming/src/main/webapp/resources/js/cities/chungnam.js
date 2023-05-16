$(document).ready(function () {
  $("#chungnam").click(function () {
    // 새로운 ul 요소를 가져옴
    var chungnam = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체<img class="District__Item__Button__Img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg=="
                alt=""></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">천안</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">공주</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">당진</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">태안</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">서산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">아산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">부여</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">보령</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">안면도</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">불당동</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">논산</span></button></li>
<li class="District__Item"><button class="District__Item__Button false" id="gaeryongsi">계룡시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="gongjusi">공주시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="geumsangun">금산군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="nonsansi">논산시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="dangjinsi">당진시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="boryungsi">보령시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="buyeogun">부여군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="seosansi">서산시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="seochungun">서천군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="asansi">아산시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="yesansi">예산군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="chunansi">천안시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="dongnamgu">천안시 동남구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="seobukgu">천안시 서북구</button></li>
<li class="District__Item"><button class="District__Item__Button false" dir="chungyanggun">청양군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="taeangun">태안군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="hongsunggun">홍성군</button></li>
</ul>`;

    $(".District__List__Box").children(":nth-child(2), :nth-child(3)").remove();
    // 새로운 ul 요소를 추가
    $(".District__List__Box").append(chungnam);

    $(document).ready(function () {
      $(".District__List").each(function () {
        $(this)
          .find(".District__Item__Button")
          .click(function () {
            // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
            $(this)
              .parents(".District__List")
              .find(".District__Item__Button.now")
              .removeClass("now");
            // 클릭한 요소에 'now' 클래스 추가
            $(this).addClass("now");
            if (!$(this).find(".District__Item__Button__Img").length) {
              $(this).append(
                '<img class="District__Item__Button__Img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg==">'
              );
            }
          });
      });
    });

    $(document).ready(function () {
      $(".all").click(function () {
        // 새로운 ul 요소를 가져옴
        var all = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(all);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#gaeryongsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var gaeryongsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">두마면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신도안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">엄사면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gaeryongsi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#gongjusi").click(function () {
        // 새로운 ul 요소를 가져옴
        var gongjusi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">검상동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">계룡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무릉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">반죽동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">반포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉황동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상왕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석장리동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송선동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신관동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신기동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신풍면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">우성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">웅진동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월미동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유구읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">의당면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이인면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주미동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">탄천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">태봉동</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gongjusi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#geumsangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var geumsangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남일면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">복수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부리면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">제원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">추부면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(geumsangun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#nonsansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var nonsansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">가야곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">강경읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">강산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">관촉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광석면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕지동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">등화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">반월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">벌곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부적면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부창동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상월면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양촌면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연무읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">은진면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">채운면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">취암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화지동</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(nonsansi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#dangjinsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var dangjinsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고대면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대호지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">면천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사기소동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석문면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송악읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수청동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">순성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">시곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용연동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">우강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">우두동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">읍내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정미면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">채운동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">합덕읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">행정동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(dangjinsi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#boryungsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var boryungsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">대천해수욕장</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">궁촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내항동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동대동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성주면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신흑동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">요암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">웅천읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주교면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">천북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청라면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청소면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화산동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(boryungsi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#buyeogun").click(function () {
        // 새로운 ul 요소를 가져옴
        var buyeogun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구룡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">규암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부여읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">세도면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양화면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">외산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">은산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">임천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">초촌면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">충화면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">홍산면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(buyeogun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#seosansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var seosansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">갈산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕지천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동문동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부석면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성연면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수석동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양대동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">예천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">온석동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">음암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">읍내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">잠홍동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">팔봉면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해미면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(seosansi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#seochungun").click(function () {
        // 새로운 ul 요소를 가져옴
        var seochungun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">기산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">비인면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서천읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">시초면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장항읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">종천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">판교면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">한산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화양면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(seochungun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#asansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var asansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">배방</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">선문대</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">권곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">기산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도고면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">둔포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">득산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">모종동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">방축동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">배미동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">배방읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">법곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">선장면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송악면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신인동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신창면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">실옥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">염치읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영인면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">온양동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">온천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">음봉면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">읍내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인주면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장존동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">점양동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">좌부동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">초사동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">탕정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍기동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(asansi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#yesansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var yesansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">덕산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">고덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광시면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대술면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대흥면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삽교읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">예산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오가면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">응봉면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(yesansi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#chunansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var chunansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동남구</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서북구</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(chunansi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#dongnamgu").click(function () {
        // 새로운 ul 요소를 가져옴
        var dongnamgu = `
<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">천안터미널</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">야우리</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">광덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다가동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">목천읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">병천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사직동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성황동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수신면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신방동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신부동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍용동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안서동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유량동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청수동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍세면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(dongnamgu);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#seobukgu").click(function () {
        // 새로운 ul 요소를 가져옴
        var seobukgu = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">불당동</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">지웰시티</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">천안아산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">두정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백석동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부대동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">불당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성거읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성환읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍용동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">업성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">와촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">입장면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">직산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">차암동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(seobukgu);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#chungyanggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var chungyanggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대치면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">목면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">비봉면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청양읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화성면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(chungyanggun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#taeangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var taeangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">안면도</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">고남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">근흥면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안면읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">태안읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(taeangun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#hongsunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var hongsunggun = `
<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">갈산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">결성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광천읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구항면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금마면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서부면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">은하면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">홍동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">홍북읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">홍성읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(hongsunggun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
  });
});
