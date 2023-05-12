//import directory from 'stellarterm-directory/directory.json'
import directory from './directory.json'

// adds / overrides:
directory.anchors['funtracker.site'] = {
  name: 'funtracker.site',
  displayName: 'FunTracker',
  website: 'https://funtracker.site',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QsQBh82MGjjvAAAF/NJREFUeNrtXWlcE9faPzPZNwiBsAVBCIrIIgLa2ivo9Vp9q9XeVsSqXPdqr1VutXVXWmtrvbUut3aBvlavC0V/tlqXi6WvrRtqrRtuoIAIgRAIIRvZl5n3w0gcMknMhAh8uM+nycmZk5P/POc5z3oGQlEU/Je8Iyqx6VFtrVKl6slJcDmcxMREAEEuv22TyxsbG+0I0nOgUCjxYjEvMNATWGaT6aONHx49ekyl0UBupu53QlGUw2YPy8z83927eQEBTt/u2b27sLCwSSpFULTHpgRB0ODEQRsKCkaNGu08VwcVrF/bi0w+MF6MdqWS4mIYhntrPgFcblVlJX4+T8E6+uMPAAKLFi5CEATtcdqyZQuHw5k7a5ajpfrhw8jIyN4VUgPixSaTyRkstVrN5XLnzp2H9h6VlJQwGIwrly+jKGq1Wt9//72+INS3fPqpM1gb1q9jMplor5Ldbp8+ffq8uXPNZrNSqaRSKH0BrHixuLWl5SlYer1u+LDMosIitLepvLw8Lja2o6Pj33v29B2N4eSJE9j0YACApEEik7XMnjO7OzsaAECr1crl8u5MKyEhISIiQqlQ/Hj0aB9BCoKgP/74A7uGAQD19fUjRrxEpVK7M+KlS5dycnImT5585MgRn8cJCQlJTEy8cOFCdU1NHwELRdH79+9bLBYAABVF0dra2sTExO5oMTKZbNGiRffv3wcAzJk1e9iwYf379/dtKLFYfPzECYPB0HeWYUNDg9lsptPpMIqiHR3aiMiI7mg0J06cqK6uxq4NJuNHGzf6PFSkSCRpaDCbTP79wxQKxec/aLVaLWYzAADG9mkWk+nzPKxWa/nFi1ar1dFy4OBBn0cTiUSPH9erNRo/IhUWFrZhw4Z169YJhUIfbjcajRqN5skytFhtUDfYSq1W1z1+jG+x2Wx/XL06/IUXfLHLqFSj2YTJCL8Qk8k8cODA2LFjEQTJzs6eMGEC/rl6Qza73WK1PhHw3SSj0ajX650aK6uq+ojEyZ069eWXX4YgiEKhZGVl5UyZ4vNQfgDLbDYbjUbi/thXwJo2zXHNYDBenTSJ6avM8QNYdDqdwWD0TQ+USCRKT0/Ht4weNSqQ4HvpObACAwNDQkKcGjO6TrG3iM/nR4SHO+22bDa7h8B6YiXhiMPhRERE4FtoNFpySkpfAIvH4xF9ij4LCNJg/frrr7t27cL0Twc0Y8aModFojpZ3Fi/uI8sQceVf9VmekgPLYDAUFRW99957EyZM+Ed+vkatxtpnzJgxID4eu46IiFi2fHkfAUun0xHxstntPQGW0Whsamqy2WwSieSLXbuKioqwdhaLdf369cGJidHR0SUlJdHR0X3BAAYAyOXyuro6fHtNTY3PthSVLGfhf0mpVDoEmaK9/fyFC0RJ3ysUEBAwd+7c4ODgwsLC8vLy+E6uBwCUlZWpfA3HkOMshUKh7lx6AABW57Zy8sSJV1999YUXXli+fHlfsIFXrFixc+fODRs27N2798iRI9hKRFFUp9MdPnzYZrP1BFg6nQ6vrIeFhQEAGhsbP9q06c6dO3V1dV9++WVJSUnvIhUVFbVq1Srsety4cXw+/4OCAmxh7ty5s7y83OeRyS1DuVzuWHoUCiUwIAAAUFFRcePGDYdRfaikZObMmcxuWObdpA8KCvBb8xtvvJGTk3P+wgWLxXL16tXujEwOLKPR6FCyuFxuWHg4iqK/lJXh+1y4eFEmk8XGxvYKUikpKa/99a/4luzs7NDQ0IsXL3Z/cBLLEEEQqVT6VGCxWEFBQSiKHj9+HN/NYrF007nsM9FotAULFjj5YXg83pgxY/wyPgmwUBRtbGzETyI4OBgA0NjU5NTT4bTuYQoNDV20aBHRRTN27NieBgtBkAdVD/BgMZnMukd1xJ737t7zME5tbe3333//PMBau3atS5P+xRdf7NevX09zVt3jp9BERERwudxbt266AOu+J7B++OGHvLw8vyM1cODAWbNmufwqKSkpXhzf05xVj/OI8vl8JpNZW1tL7Pmg0pPnT6VS4Xcrf9HyZcu4XK67b19/4/Xuu9hIgGW321GcMREVFQXD8JUrV4g9lWqVB8SbpVK/R5vj4uJmz5lDbDebzdjF9OnTKd3+URJgVdy6hbe8MBdajZsAX31Xr7yDrFZrq1w+YOBA/4K1evVql9Lq402bFAoFACAkJCQ7K6vnwLreqXkCAKhUamhoKABA3tbmsvOdu3ddtlsslubm5gS/gpWampqTk0NcZefPnf9s69aKioonrpGZM3sOrOqH1XiNJiwsTK/XI24S8lzKMmwtq9VqP9rbFArlrQULgoKCiOu9sKjQYrGcPHECvyfyeDx+J/F4vOcF1u9Xf8crL7GxsTU1NQ6h4ES3O58n0W9hNpsHJyX5C6zIyMiFBN0KAFBeXn7s2DEAwOnTpzHbPikpSSKRaLVaVSdptVpSwR4SYFXholt0Ol0kEkmlUncWfH19vct2tVptNpv9ovVgtH79ejqdTmzfsX079iCbZbLr16+7FXZr1vgfLLPZbMKF1Ol0Op/Pr62pcRewrH306P49F9pWR0eHxWLxORPCicLDwydOnEhsP3v27Kn//Ae71uv1p06dcjcCm832fpf0FiyVSoWPU2BOhVaCDRgUFMRisQAAzc3NySkpi/+++OHDh/gbZTKZxWz2Ob7iRCKRSCQSuWKrHXiWv37tGt4Nh6empia7115mb70OTvpeakoKAKC9vR3fCEFQ0uDBTU1N9Q0NWMs3hd/s379vZl7e22+/PXToUGwZsjkcf8UZXeYu/Hz69MlTJ7sw2rlze/bsycrKwj82CILsdvu6tSRyjkmAVVxcvG7tWgyIIWlpAABMhemyLiIiTGazAywAgN5g+Pbbb3///ffS0lKRSNTa2ioQCDDu6z65ZAqXG/Tq1au5XK5TEM9ut3d0dDwXAT9jxoz7lZXbPv+cyWTm5+drNBoiWOK4uCFDhrhQu+7cwfYHtUrNYrG6kziHJ61WS2ycMHHi1199RVSGVSqVuiuRQgqQdSuz2ezl771nNBp5PF5HR4cTWCiKQjA8LXca5rohinYAgMFoiO7Xj8Ph+AUsmUxGfGAAgL8vXrzxww/9nkPv+3AGg4H4ZBobG8e+PPaXsrKlS5ZiKj5ee0RRtK2tLSgoyF+GtEQiuXDhgsuvNhQUfPDBB30FrLa2NhMhPw/j7fSMjB07d1y+fHnJ4newdhaL1b9/f7PZrFKpBK74zmdauXKlu7BzQUFBwYYNfQIstVpNVLJkMhnGbhQKRSwW7/rqy6ampldeeWXVypXJyckdHR1NjY3CEKEf/8CjR4+m5kx1t/2vWbvWjykqPoKFoqhMJiOmZanVaqdGkUhUWlr6wYcfwjBss9k6dLogQZB/V8fRY0dXrVzp0vBiMpmvv/FG73NWe3s7MZlRo9EQswAdZDKZtFqtkyzzC23bvn3zJ5+480n4S9L7OAqCIAqFgljYabFY3OnKmM2k1Wp9ziV7MmMYjoqMHJaR6RSa3PTxx19//TWxf0R4uAdNhU6nc7xWkn0Ey263a10lFJvN5ubmZnd3WSwWu93u0kDxhphMZt7MmfX19Y1S6R/XrxmNxgP7DzgClCiKLl++/Kdjx4gSw+VoMTExO7ZvVymVOp1OpVLt3r07OTn5uYBlNpsbJBKXcLS2trqbX2tLC41G8+Ap90A0Gu2fW7YcOHgQ77HI+1veb7/+mjVypGNWc+bOdTiwPFBmZubZ3357d9kyNoeDbdbz58//7bffcqdO9T9YFoulpaXFNSKtre7ukjY3MxgM3yL7a1avzv/HPxwfbZ0bcf/Y2D1794rFYofQnD1nzqVLl7qoEU7md2RkaWlpbFwc0dIs+vbbzMxM/3NWo6SRLFh379yNCA/3wYpOSkpamp+P2Tfz5syh0Wh0BqNfVNQvZb8AAOLj41etWuVQdFUqVV5enoe8oj179wqFQgRByi9e/POoUTAEpQxO+qWsDEEQPp//2T//6fZxWq3WdevW7d+/n1StmzvfHgBg4oQJZrPZ5V15M/MyMjKwncEdnTt3zmmd0un0gwcPYj86NC3N6ee2bt2K3fgCrkaBy+VKpVKs/Y+rVxk47+Cc2bMtFovJZPrss8+chspfmo/NfHHXNM/Y2NiqqioURX0E6+6dO/jtKTAgwLE9Dx06VKlUurxrxIgRr7zyilarJQVWYmKi1WrV6/WjsrNdPp79+/ahKPrjjz86WgIDA5ubm4lgBQUFXbx4EUXR4uJi10bS+vUoisrlcoFAQATLx2WID97QaLTU1FTHKmhXKExuypQaHj8OFgjIGoZLlyylUql79+4978YM3Pr5583NzZMnT05+lmtfLBb/6U9/UiqVS5cscdmhsKjoxo0bQqFwWm6u32RWFS7mzOFwkpOTHbpMY2OjTqdzeVdzS0tEZCQpmQXD8My8mXq9fith1TwVhXfvnjx5kkqlTp482fNob7/9NgRBGz/c6O7gira2tv379iEIMiUnh+h08xGsu3efLkOBQDAwIcERtkMBcMlZmDnC4/FIhdFfe+2vAQEBx44da3G/bwAAdn3xhclkyvG48bNYrJdeekmn031f4iktZdeXX0ql0vT0dGJUxUewHjx4gJemcXFxeLe/o/bQSckCnc577+nPfx4NADh79qy7mBtGlVVVlZWV0dHRMTEx7vqkpKQkJCQUFxdrPNbnYecA8Hi8dIIF7iNYD3FwBAYGisVivFR2yqZ+snIfPIBhmNRRDTAMJyYmtrW1eYhlOf7hqVOnAgMD0937GBIHDYJhuOLWrWeW0BUXF1Op1DTCzusLWE72M5PJjIqKwlt8t3BZEXhxQKFQSBmGQqEwLi6uubn5Dm7zdUeXLl2iUqkprspgMIsiJSVFo9HcvHnzmUM1NjbK5fKoqCinKJkvYN2+fRv/MVggCAwMxKOAD/Q7qL6+nsFgYAnOXhKfzw8PD29zk07hRC0tLUajMbxrWZOTZtve3u6S651Ir9dXVlbGxMQEdD0bxxew8HkMEATFicWY5H6qWNy57cIF3NDAZDKDcfrLM4nL5bJYLJdZTS5dzDKZTCgUulRNYBhOGDTIYDC0d2Zbe146VVVVkZGRTvFNX8CquNUljyFp8GBM33tqFbiK6ctaWthsdigZzsKQbXcVkiCSwWDAIilE1QRFURiG+Xw+ptZ7M5pKpcKy9boL1oMHVXjOwpKt4rrmcj8glP3qdDoGg0HK5RAaFgZBkAefjxM7GI1GoVDoMihJoVD4fL7ejQJIJI1aLRAI/ACWtOvssWSrhEGDnPZy/EebzWYwGGCSiYoYFyi6xr09yxqXTlEUAAiCUBT1EncAgE6vJ/r1SYNlt9udvOxcHg8A4FQJVv3wIf6jUqlUKBSDBiX64snyOiLrsCIgCHKp+lLIBHeJI5AGq6WlBV/KFNfpFRqc2AUIfPUm6KzQDw0lF9exWqwAgH79vCrIg2GYx+OZjEYEQTQajcOKaG9vt9vtmFHtVHHrgfCuAd/Bksvl+JBE2pAnmltY1z279tEj/Ee1Wq1UKsmmkkqlTSiKCryLBjEYDAaDIW9rMxgMEAQ56hse1dVh501pNBrvU/04XG5bW5tThRtpsJyGSMQxFB+nahmNRnzsU61W22y2GJJFmzqdDoIgL9MEQ0NDg4KClEqlyWRCEGTfv/dh7cd/+gkTfwqFIjg42MtIT79+/TQajZP6TfVhGeLNhcxhT52waUOHnjt3zgFWe3u7IyVIp9OhKCqOJ5e5r1Kr5XJ5kndgRYlEoaGhmCsNAHDkhyMDBg5ok7f935kzmKi9f/9+RkZGeFhYs0z2TCaNjY2VSCRO+QmkOUulVOJZBu9CwostvV6Pd9JjpU+xJBP+VCqVVCrFkmWf2Tl+wAAAwKNOhVmr1a5evXrb9m1P7dmHDwUCgTflalwud8iQIRKJxMnXRA4sBEFaWlrweh0fp4umpKbiVUR8fotKpYIAIJvl0NHRUVNTExMTM2LEiGd2Hj9+vE6nq7h9212Hmzdvcrlcb85QiI+PDwgIkEgkTlkU5MCy2WyK9nYHWMECAd7UxGe363Q6R70diqJNjY2BXnAHka5fu0an04kOAKKvavz48Vqt1oN/orq62mg0ZmVlPdNN9NaCBWazmegOIAcWlvLvwFssFuMNMbwkttlsjs0bRVGlShXiU/LM6dM/IwiSm5sb7PH2nCk5gYGB5eXlHo5HqqysrKmpefPNNz0Y2wAALoczfcYMlUp1m8Ck5MCyWq346HxUVBQ+rRqvxWGZIxisdrtdKpWKfarLunf/XsWtirS0tNGjR7vrw2azFy5aSKFQvncThnBMvqysjEKhzJ8/30O3d955h8ViXbt2TUKIIpMDS6vV4jcIsViMTyOg0Wh45aC1tRXbN+12u1ar9fmwh082fwIAWLtmjbsc50mvTho5cmR1dbW7iIaDjhw5YjKZli1b5m5dR0dHL1y0CIKgw4cOd9fc0Wq1+A0iuGtVCY1Gi8Z5daVSKQaWzWYzm82iKB9THK5cuXK74nZ6RsamTZtcKkTfFH4DACg+eNBDTopjJZ45c4bD4WzZsoVoRcEwvGLFiri4uKampkOHD7kwEkjNW6lU4h3YTiU4VCoVz1lyuRxLRscyX2N9LRSQyWTf7fnOZrMtX7588+bNjogeBEHp6elnz54NCgqqr6/fvmOHN5b2t0VFRqNx/PjxRUVFeDEaEBCw4v33lyxZgnGxy+w4ckqpWq12JAgzmcwQAmfh4wXt7e0YZ+n1er1eH9yN4qbvvvtuypQpo0aNWrNmzV/+8pfy8nK73S4UCnNzc9lsNoIgG9Zv0Hnnfjl56tThw4fnzJkzd9681NTUn8vKrly+nJiYOHny5KzsbADAoUOH3J1ZSA4sjUbjqFzgcrnEFFu8fqDX69VqtVAoVKvVJpMpgHB8ufdkMBgWL158/vz5kJCQ4cOHDx8+3AnKg8UkjmTMz88fmpY2JC0tIzMzIzNTp9Ox2WzMDJI0NGAnZri21Ul5l/BrkMViEbdzgUDgML50Oh3mPtfpdDAEdfNYjMrKynHjxj3Acg5w/qKvv/pq0cKFZHXdVydNutGpkXG5XBiGURSVSqXTcqd5OE+WBGchCFKLG4jH4xG3p+DgYDabja0InU6HKfFqtZrOYHQz4Q8AcOvWrazs7LcWvJWRkc5kMNoUiuLi78/8esaHoZqamsaNH//uu++OysqK7t9f3tpafunS9m3bpB69g+TAwqMeHBxM9HbjwbLZbFhxj16vZzGZvuWwOZFCofh0y6cQABAEId17+4ZSqSwoKAjg8SJFoja53JtABpXUMmxXPPXwCoVC4spyqsvBOMtoNHK4XH9VgmFuYn+9p0Tb0aHFRdef4V8EAHjvGncYExAEhYaGuuQsfKkJptM/qq0VCASkOKvvnNzZBSwIguh0GuJFzR0Mw1H9ohx/Jjw8nFhCymKx8LKJz+cjCNLa2ur9VmgwGPi8ALafysb8QnQaDZsPDEEQjUbXaLXPZGwKhTKyM9WVwWAMHjyY2IfH46WmpmJ8wePxkpKSrFZrg0QSGhrqJbM0NDSI48W8bugZficmk4k9bBiG4bCwMGnTs6OPEAT9z/jxMdHREAQlJCRMdZXfA8Pw9OnTMVfEiBdfTE5ORlGUSqUSq+Pd6uvNzalDhrD6EmcxWSw6JnBQFD1/7uzoUaOsVqs3CZInjh9fv249lr/tjkpLS1euWFlXV4eiKIIg586dq6io8DIBc2pOTumpUynPSknvSZr1t79h4AAssTUiPLyl87UWvUh1dXVpQ4a0trYu8OhF6WHasX3703dYxMTEpKamrl2zttende/ePZvNxuFwnscxSL4Ri8nMyMh4qj2hKLp//34AgNMLjHqYOjo6BsTHb968GYuSDhgwoC+AlZGR4eKNTomDBqWmprrLyu4Bmj9vfkhISP3jx9jHosLCvgDWLz//7Jgh5NgEH9XWDhwwYGhGxuZPNicMSujJV/m1trR+9NHG0tOnd/3rX0vy85/o1hrNmDFjbniRqPf86M3c3JLDh7sYMbid7idWLx2ZCQHw/rJlTrxW/fBhOJl8Lv9S9siRCoUC/+Y0yImDbly/tv3zbVI3RUzPiUKCgubOmzdx0iQX7kalcutnWy9fuYL2pP2DIFNef33ewoVOpwRA/31zJgnb8L8QeE//D+E/UNYGRurqAAAAAElFTkSuQmCC',
  assets: {
    FUNT: 'FUNT-GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU',
    THB: 'THB-GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU',
    mBTC: 'mBTC-GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU',
    BTC: 'BTC-GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU',
    USD: 'USD-GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU',
  },
}

export default directory
