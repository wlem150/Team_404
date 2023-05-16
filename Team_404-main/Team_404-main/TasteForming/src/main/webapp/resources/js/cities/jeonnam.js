$(document).ready(function () {
  $("#jeonnam").click(function () {
    // 새로운 ul 요소를 가져옴
    var jeonnam = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체<img class="District__Item__Button__Img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg=="
                alt=""></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">여수</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">순천</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">목포</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">담양</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">광양</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">나주</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">화순</span></button></li>
 <li class="District__Item"><button class="District__Item__Button false" id="gangjungun">강진군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="gohunggun">고흥군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="goksunggun">곡성군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="gwangyangsi">광양시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="guraegun">구례군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="najusi">나주시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="damyanggun">담양군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="mokfosi">목포시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="muangun">무안군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="bosunggun">보성군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="sunchunsi">순천시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="sinangun">신안군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="yeosusi">여수시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="younggwanggun">영광군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="youngarmgun">영암군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="wandogun">완도군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jangsunggun">장성군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="janghunggun">장흥군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jindogun">진도군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="hampyeonggun">함평군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="haenamgun">해남군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="hwasungun">화순군</button></li>
</ul>`;

    $(".District__List__Box").children(":nth-child(2), :nth-child(3)").remove();
    // 새로운 ul 요소를 추가
    $(".District__List__Box").append(jeonnam);

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
      $("#gangjungun").click(function () {
        // 새로운 ul 요소를 가져옴
        var gangjungun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">강진읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대구면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마량면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">병영면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성전면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신전면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옴천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">작천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">칠량면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gangjungun);
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
      $("#gohunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var gohunggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고흥읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">과역면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도양읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도화면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동일면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">두원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉래면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">점암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">포두면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍양면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gohunggun);
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
      $("#goksunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var goksunggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">겸면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고달면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">곡성읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">목사동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼기면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥과면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">입면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽곡면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(goksunggun);
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
      $("#gwangyangsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var gwangyangsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광양읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금호동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다압면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도이동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성황동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥룡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중군동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진상면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진월면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">태인동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황금동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황길동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gwangyangsi);
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
      $("#guraegun").click(function () {
        // 새로운 ul 요소를 가져옴
        var guraegun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">간전면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광의면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구례읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문척면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용방면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">토지면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(guraegun);
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
      $("#najusi").click(function () {
        // 새로운 ul 요소를 가져옴
        var najusi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">경현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">공산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">과원동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">관정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금계동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남외동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남평읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다도면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다시면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대기동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대호동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동수동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">반남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉황면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">빛가람동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼도동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">세지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안창동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오량동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">왕곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이창동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진포동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">토계동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평산동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(najusi);
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
      $("#damyanggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var damyanggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">가사문학면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">담양읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대전면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">창평면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(damyanggun);
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
      $("#mokfosi").click(function () {
        // 새로운 ul 요소를 가져옴
        var mokfosi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">목포역</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">평화광장</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">남악</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">목포하당</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">경동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">달동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대안동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대양동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대의동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">만호동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명륜동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무안동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보광동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">복만동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부주동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상락동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수강동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영해동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">온금동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용해동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유달동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">율도동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이로동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">창평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">축복동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">측후동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">항동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해안동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">행복동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">호남동</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(mokfosi);
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
      $("#muangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var muangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">망운면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">몽탄면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무안읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼향읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">일로읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청계면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해제면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">현경면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(muangun);
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
      $("#bosunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var bosunggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">겸백면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">득량면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미력면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">벌교읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보성읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">복내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">웅치면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">율어면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">조성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">회천면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(bosunggun);
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
      $("#sunchunsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var sunchunsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">가곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교량동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">낙안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대대동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동외동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">매곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">별량면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼거동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상사면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">생목동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송광면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">승주읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안풍동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">야흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연향동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">와룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">왕조동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">왕지동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">외서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월등면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인제동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">저전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">조곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">조례동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해룡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">행동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">홍내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황전면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(sunchunsi);
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
      $("#sinangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var sinangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도초면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">비금면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신의면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안좌면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">암태면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">압해읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">임자면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">자은면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">증도면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지도읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">팔금면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하의면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">흑산면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(sinangun);
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
      $("#yeosusi").click(function () {
        // 새로운 ul 요소를 가져옴
        var yeosusi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">경호동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고소동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">공화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">관문동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광무동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">국동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군자동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">낙포동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕충동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">돌산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">둔덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">만흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">묘도동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문수동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉강동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉계동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">선원동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소라면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소호동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">시전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신기동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">여서동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">여천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연등동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">웅천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월하동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">율촌면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">적량동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">종화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주삼동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">충무동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평여동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">학용동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">호명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화치동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(yeosusi);
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
      $("#younggwanggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var younggwanggun = `
<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">낙월면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대마면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">묘량면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백수읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">법성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">불갑면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">염산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영광읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">홍농읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(younggwanggun);
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
      $("#youngarmgun").click(function () {
        // 새로운 ul 요소를 가져옴
        var youngarmgun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕진면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼호읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서호면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">시종면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영암읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">학산면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(youngarmgun);
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
      $("#wandogun").click(function () {
        // 새로운 ul 요소를 가져옴
        var wandogun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고금면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군외면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금당면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금일읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노화읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보길면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">생일면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">약산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">완도읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청산면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(wandogun);
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
      $("#jangsunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var jangsunggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동화면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북일면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북하면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼계면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서삼면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장성읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황룡면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jangsunggun);
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
      $("#janghunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var janghunggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">관산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대덕읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유치면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장흥읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">회진면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(janghunggun);
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
      $("#jindogun").click(function () {
        // 새로운 ul 요소를 가져옴
        var jindogun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고군면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">의신면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">임회면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">조도면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진도읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jindogun);
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
      $("#hampyeonggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var hampyeonggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">나산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">손불면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신광면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">엄다면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월야면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">학교면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">함평읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해보면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(hampyeonggun);
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
      $("#haenamgun").click(function () {
        // 새로운 ul 요소를 가져옴
        var haenamgun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">계곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북일면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해남읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">현산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황산면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(haenamgun);
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
      $("#hwasungun").click(function () {
        // 새로운 ul 요소를 가져옴
        var hwasungun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">능주면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동복면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백아면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청풍면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">춘양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">한천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화순읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(hwasungun);
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
