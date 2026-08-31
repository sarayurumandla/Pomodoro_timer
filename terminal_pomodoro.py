import time

WORK_TIME = 25
BREAK_TIME = 5
LONG_BREAK = 15

def countdown(minutes):
    seconds = minutes * 60

    while seconds > 0:
        minutes_left = seconds // 60
        seconds_left = seconds % 60

        print(f"\r{minutes_left:02d}:{seconds_left:02d}", end="")

        time.sleep(1)
        seconds -= 1

    print("\r00:00")
    print("Time's up!")


def pomodoro_cycle():
    for session in range(1, 5):
      print(f"\nWork session {session}/4")
      countdown(WORK_TIME)

      if session < 4:
          print("\n Short break!")
          countdown(BREAK_TIME)
      else:
          print("\n Long break!")
          countdown(LONG_BREAK)

    print("\nPomodoro cycle complete!")


print("Welcome to your Pomodoro Timer!")

while True:

    start = input("\nStart a Pomodoro cycle? (y/n): ").lower()

    if start == "y":
        pomodoro_cycle()
    elif start == "n":
        print("Maybe another time!")
        break

    else:
        print("Please enter y or n.")
